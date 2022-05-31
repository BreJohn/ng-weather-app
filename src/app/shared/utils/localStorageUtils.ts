export function getLocalStorageCityNames() {
  const cityNames = localStorage.getItem('favoriteCityNames');
  if (cityNames) {
    return JSON.parse(cityNames);
  }
  return [];
}

export function storeInLocalStorage(name: string) {
  const cityNames = localStorage.getItem('favoriteCityNames');
  if (cityNames) {
    const storedArray = JSON.parse(cityNames);
    const cityArray = [...storedArray, name];
    localStorage.setItem('favoriteCityNames', JSON.stringify(cityArray));
  } else {
    localStorage.setItem('favoriteCityNames', JSON.stringify([name]));
  }
}

export function removeFromLocalStorage(name: string) {
  const cityNames = localStorage.getItem('favoriteCityNames');
  if (cityNames) {
    const storedArray = JSON.parse(cityNames);
    const cityArray = storedArray.filter((filteredName: string) => filteredName !== name);
    localStorage.setItem('favoriteCityNames', JSON.stringify(cityArray));
  } else {
    localStorage.setItem('favoriteCityNames', JSON.stringify([name]));
  }
}
