export const delayTime = async (promise) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, );
    });
  
    return promise;
};