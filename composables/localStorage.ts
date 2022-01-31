export function useLocalStorage() {
  return {
    getItem(key: string): null | any {
      try {
        if (!window.localStorage) return null;
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {
        window.localStorage.setItem('player', '');
        return null;
      }
    },

    setItem(key: string, value: any) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
  };
}
