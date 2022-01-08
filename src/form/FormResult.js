import React from "react";

export default (result) => {
  return <>{result && <pre>{JSON.stringify(result, null, 2)}</pre>}</>;
};
