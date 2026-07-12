import { useState, useEffect, useCallback } from 'react'

/**
 * Mock "backend" persistence layer. Reads/writes JSON to localStorage,
 * simulating a simple API with a small artificial delay so UI loading
 * states have something real to show.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // storage unavailable — fail silently, app still works in-memory
    }
  }, [key, value])

  return [value, setValue]
}

/** Simulates an async API call (form submits, donations, etc). */
export function mockApiCall(payload, delay = 900) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, id: crypto.randomUUID(), ...payload }), delay)
  })
}
