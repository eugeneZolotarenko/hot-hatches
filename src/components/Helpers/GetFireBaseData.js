import firestore from "../../firebase/firebase.utils"

function addDocIdToArr(doc, array) {
  array.forEach((obj) => (obj.id = doc.id))
}

async function GetFireBaseData(collection, setData) {
  const snapshot = await firestore.collection(collection).get()
  const dataArr = []
  snapshot.docs.forEach((doc) => {
    const data = doc.data()
    dataArr.push(data)
    addDocIdToArr(doc, dataArr)
  })
  setData(dataArr)
}

export default GetFireBaseData
