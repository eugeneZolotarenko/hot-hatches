import firestore from "../../firebase/firebase.utils"

async function GetFireBaseData(collection, setData) {
  const snapshot = await firestore.collection(collection).get()
  const dataArr = []
  snapshot.docs.forEach((doc) => {
    const data = doc.data()
    dataArr.push(data)
  })
  setData(dataArr)
}

export default GetFireBaseData
