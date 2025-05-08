import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const db = getFirestore(app);

export const obtenerDoctoresPorEspecialidad = async (especialidad) => {
  const ref = collection(db, "doctores");
  const filtro = query(ref, where("especialidad", "==", especialidad));
  const snapshot = await getDocs(filtro);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

  export {db}; //de forma nombrada exporta multiples cosas, con default exporta solo una cosa.
