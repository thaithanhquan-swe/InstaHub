const DELETED_HIGHLIGHT_IDS_KEY = 'instahub:deleted-highlight-ids';
export const HIGHLIGHT_DELETED_EVENT = 'instahub:highlight-deleted';

export function getDeletedHighlightIds() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(DELETED_HIGHLIGHT_IDS_KEY);
    const parsedValue: unknown = storedValue ? JSON.parse(storedValue) : [];

    return Array.isArray(parsedValue)
      ? parsedValue.filter((value): value is number => typeof value === 'number')
      : [];
  } catch {
    return [];
  }
}

export function markHighlightDeleted(highlightId: number) {
  const deletedIds = getDeletedHighlightIds();

  if (!deletedIds.includes(highlightId)) {
    window.localStorage.setItem(
      DELETED_HIGHLIGHT_IDS_KEY,
      JSON.stringify([...deletedIds, highlightId]),
    );
  }

  window.dispatchEvent(new Event(HIGHLIGHT_DELETED_EVENT));
}
