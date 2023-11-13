import { useEffect } from 'react';

import { useStoreApi } from './useStore';
import type { OnSelectionChangeFunc } from '../types';

export type UseOnSelectionChangeOptions = {
  onChange: OnSelectionChangeFunc;
};

function useOnSelectionChange({ onChange }: UseOnSelectionChangeOptions) {
  const store = useStoreApi();

  useEffect(() => {
    const nextOnSelectionChangeHandlers = [...store.getState().onSelectionChangeHandlers, onChange];
    store.setState({ onSelectionChangeHandlers: nextOnSelectionChangeHandlers });

    return () => {
      const nextHandlers = store.getState().onSelectionChangeHandlers.filter((fn) => fn !== onChange);
      store.setState({ onSelectionChangeHandlers: nextHandlers });
    };
  }, [onChange]);
}

export default useOnSelectionChange;