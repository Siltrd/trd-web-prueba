// src/auth_config.js
export const authConfig = {
  domain: 'dev-8c0qt5ou52tr13ef.us.auth0.com',  // Reemplaza con tu Auth0 domain
  clientId: 'gn7EHFwLaPw71sjF1FoNkhIvf6Jh6kSM',  // Reemplaza con tu Auth0 clientId
  authorizationParams: {
    redirect_uri: window.location.origin
  }
};

export default authConfig;
