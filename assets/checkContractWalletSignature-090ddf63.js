import{i as s}from"./isValidSignature-5b22a95a.js";import{cn as a,L as i,K as c,W as u,a2 as o}from"./index-770cdd3a.js";const g=`Ethereum Signed Message:
`;function f(t,r){const e=(()=>typeof t=="string"?a(t):t.raw instanceof Uint8Array?t.raw:i(t.raw))(),n=a(`${g}${e.length}`);return c(u([n,e]),r)}const h="0x1626ba7e";async function y(t){if(!o(t.signature))throw new Error("The signature must be a valid hex string.");return await s({contract:t.contract,hash:f(t.message),signature:t.signature})===h}export{y as checkContractWalletSignature};
