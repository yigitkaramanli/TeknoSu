import { ref } from '@vue/reactivity'

const getSortedProducts = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjE1Y2ZmYjg1NjhiMWFjNDU1YTQ1NCIsImlhdCI6MTY1MDU0Nzk2OCwiZXhwIjoxNjU4MzIzOTY4fQ.Y1pTp6jc6BlsqTlrkc5eVhqHj_tzfS0lA4Q5a-DOufo"
    const productsSorted = ref([])
    const error = ref(null)

    const load3 = async() => {
      try{
        let response = await fetch('http://localhost:3000/api/v1/products?sort=newPrice')
        if(response.status !== 200){
          throw Error('no data available')
        }

        const data = await response.json()
        productsSorted.value = data.data.products.filter(el => el.status === 'active')
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    return{
        productsSorted, error, load3
    }
}

export default getSortedProducts