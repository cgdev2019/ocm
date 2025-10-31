let accessToken: string | null = null;
let refreshToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const setRefreshToken = (token: string | null) => {
  refreshToken = token;
};

export const getAccessToken = () => accessToken;
export const getRefreshToken = () => refreshToken;
