"use client";

import { useMemo, useSyncExternalStore } from "react";
import { collectionStorageKey, parseCollection, type LocalCollectionItem } from "@/lib/local-collection";

const eventName = "nb-archive-collection-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(eventName, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(eventName, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(collectionStorageKey) ?? "";
}

export function writeLocalCollection(items: LocalCollectionItem[]) {
  window.localStorage.setItem(collectionStorageKey, JSON.stringify(items));
  window.dispatchEvent(new Event(eventName));
}

export function useLocalCollection() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, () => "");
  return useMemo(() => parseCollection(raw), [raw]);
}
