import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const getTimeAgo = (createdAt: Date): string => {
//   const now = new Date();
//   const timeDifference = now.getTime() - createdAt.getTime();
//   const seconds = Math.floor(timeDifference / 1000);

//   if (seconds < 60) {
//     return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
//   }

//   const minutes = Math.floor(seconds / 60);
//   if (minutes < 60) {
//     return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
//   }

//   const hours = Math.floor(minutes / 60);
//   if (hours < 24) {
//     return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
//   }

//   const days = Math.floor(hours / 24);
//   if (days < 7) {
//     return `${days} day${days !== 1 ? 's' : ''} ago`;
//   }

//   const weeks = Math.floor(days / 7);
//   return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
// };

export const getTimeAgo = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(timeDifference / 1000);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (seconds < 60) {
    return rtf.format(-seconds, 'second');
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return rtf.format(-minutes, 'minute');
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return rtf.format(-hours, 'hour');
  }

  const days = Math.floor(hours / 24);
  if (days < 7) {
    return rtf.format(-days, 'day');
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return rtf.format(-weeks, 'week');
  }

  const months = Math.floor(weeks / 4);
  if (months < 12) {
    return rtf.format(-months, 'month');
  }

  const years = Math.floor(months / 12);
  return rtf.format(-years, 'year');
};

export const formatLargeNumber = (number: number): string => {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(1);
    return `${millions}M`;
  } else if (number >= 1000) {
    const thousands = (number / 1000).toFixed(1);
    return `${thousands}K`;
  } else {
    return `${number}`;
  }
};
