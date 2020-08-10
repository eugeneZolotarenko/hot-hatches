import firestore from "../../firebase/firebase.utils"

function addDocIdToArr(idArray, dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    dataArray[i].id = idArray[i]
  }
}

async function GetFireBaseData(collection, setData) {
  const snapshot = await firestore.collection(collection).get()
  const dataArr = []
  const idArr = []
  snapshot.docs.forEach((doc) => {
    const data = doc.data()
    dataArr.push(data)
    idArr.push(doc.id)
  })
  addDocIdToArr(idArr, dataArr)
  setData(dataArr)
}

export default GetFireBaseData
