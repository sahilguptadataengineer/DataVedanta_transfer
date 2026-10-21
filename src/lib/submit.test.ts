import { afterEach, describe, expect, it, vi } from "vitest";
import { type LeadPayload, submitLead } from "./submit";

const payload: LeadPayload = {
  type: "demo",
  name: "Asha",
  phone: "9876543210",
  email: "asha@example.com",
  program: "Data Science",
  sourcePage: "/",
  website: "",
};
const URL = "https://script.google.com/macros/s/TEST/exec";

afterEach(() => vi.unstubAllGlobals());

describe("submitLead", () => {
  it("reports not-configured when there is no Apps Script URL", async () => {
    expect(await submitLead(payload, "")).toBe("not-configured");
  });

  it("posts JSON as text/plain (no CORS preflight) and returns ok", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: true })));
    vi.stubGlobal("fetch", fetchMock);
    expect(await submitLead(payload, URL)).toBe("ok");
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(URL);
    expect(init.method).toBe("POST");
    expect(init.headers["Content-Type"]).toBe("text/plain;charset=utf-8");
    expect(JSON.parse(init.body)).toEqual(payload);
  });

  it("returns error when the script says ok: false", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: false }))));
    expect(await submitLead(payload, URL)).toBe("error");
  });

  it("returns error on a network failure or a non-JSON reply", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("offline")));
    expect(await submitLead(payload, URL)).toBe("error");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("<html>")));
    expect(await submitLead(payload, URL)).toBe("error");
  });
});

describe("submitLead timeout", () => {
  it("gives up after the time limit and reports timeout (not error)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn((_url: string, init: RequestInit) => new Promise((_resolve, reject) => {
        init.signal?.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
      })),
    );
    expect(await submitLead(payload, URL, 50)).toBe("timeout");
  });
});

describe("submitLead keepalive", () => {
  it("asks the browser to keep the request alive when requested", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ ok: true })));
    vi.stubGlobal("fetch", fetchMock);
    await submitLead({ ...payload, type: "enrollment", track: "24 weeks" }, URL, 60_000, { keepalive: true });
    expect(fetchMock.mock.calls[0][1].keepalive).toBe(true);
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).track).toBe("24 weeks");
  });
});
