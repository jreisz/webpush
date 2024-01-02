const publicVapidKey =
  "BCuo3HAxM2XGVVabyefraTb1oIDHDGCPtJcd2xasdHrtoztE77kGCYx1F6s1uHGUsr9HjUsEtlvHGVkPT3SrEtM";

if ("serviceWorker" in navigator) {
  registerServiceWorker().catch(console.log);
}

async function registerServiceWorker() {
  const register = await navigator.serviceWorker.register("./worker.js", {
    scope: "/",
  });

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey,
  });

  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
