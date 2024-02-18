const size = {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.desktop})`,
  };