const createSerialNumberGenerator = () => {
  let lastGenerateId = 0;
  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

export { createSerialNumberGenerator };
