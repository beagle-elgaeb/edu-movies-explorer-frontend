import { IncrementLineCount, InLineCount, StartLineCount } from "./constants";

export function getPagination() {
  const width = window.innerWidth;

  if (width < 609 && width >= 320) {
    return {
      startRows: StartLineCount.phone,
      countInRow: InLineCount.phone,
      plus: IncrementLineCount.phone,
    };
  } else if (width < 939) {
    return {
      startRows: StartLineCount.pad,
      countInRow: InLineCount.pad,
      plus: IncrementLineCount.padAndMore,
    };
  } else if (width < 1259) {
    return {
      startRows: StartLineCount.normalAndMore,
      countInRow: InLineCount.normal,
      plus: IncrementLineCount.padAndMore,
    };
  } else {
    return {
      startRows: StartLineCount.normalAndMore,
      countInRow: InLineCount.wide,
      plus: IncrementLineCount.padAndMore,
    };
  }
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}
