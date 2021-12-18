export function getPagination() {
  const width = window.innerWidth;

  if (width < 609 && width >= 320) {
    return { startRows: 5, countInRow: 1, plus: 2 };
  } else if (width < 939) {
    return { startRows: 4, countInRow: 2, plus: 1 };
  } else if (width < 1259) {
    return { startRows: 3, countInRow: 3, plus: 1 };
  } else {
    return { startRows: 3, countInRow: 4, plus: 1 };
  }
}
