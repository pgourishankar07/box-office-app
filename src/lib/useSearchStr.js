import { useState, useEffect } from 'react';

function usePersistState(initState, sessionStorageKey) {
  const [state, setState] = useState(() => {
    const persistVal = sessionStorage.getItem(sessionStorageKey);
    return persistVal ? JSON.parse(persistVal) : initState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);

  return [state, setState];
}

export function useSearchStr() {
  return usePersistState('', 'searchStr');
}
