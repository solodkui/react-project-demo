// import { useEffect } from 'react';
// import { useState } from 'react';

// function useLocalStorage(key) {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const res = JSON.parse(localStorage.getItem(key));
//     if (res) {
//       setData(res);
//     }
//   }, [key]);

//   const saveData = (newData) => {
//     localStorage.setItem(key, JSON.stringify(newData));
//     setData(newData);
//   };

//   return [data, saveData];
// }

// export default useLocalStorage;
