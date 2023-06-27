<script>
import { ref, onMounted } from 'vue'
import { createApolloClient } from '../graphql/apollo'
import { GET_RESTAURANT } from '../graphql/queries'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'ShopList',

  setup() {
    const result = ref({})
    const loading = ref(true)
    const error = ref()

    onMounted(async () => {
      try {
        const client = createApolloClient()
        const { data } = await client.query({
          query: GET_RESTAURANT,
        })
        result.value = data
        loading.value = false
      } catch (e) {
        error.value = e
      }
    })

    return {
      result,
      loading,
      error,
    }
  },
}
</script>

<template>
  <header>
    <div class="search">
      <input
        class="p-3"
        type="text"
        name="search"
        placeholder="식당 이름을 입력하세요"
      />
    </div>
    <div class="filter">
      <div class="btn_sel_category">
        <label for="selCategory"
          >종류 <i class="bi bi-caret-down-fill"></i
        ></label>
        <select id="selCategory">
          <option>종류</option>
          <option>한식</option>
          <option>양식</option>
          <option>중식</option>
        </select>
      </div>
      <button>가까운 순</button>
      <button>리뷰많은 순</button>
    </div>
  </header>

  <ul class="list">
    <li v-if="loading">
      <div class="loading"><i class="bi bi-arrow-clockwise"></i></div>
    </li>
    <li v-else-if="error">{{ error.message }}</li>
    <li v-for="restaurant in result.restaurant" v-else :key="restaurant.id">
      <strong>{{ restaurant.name }}</strong>
      <small class="category">{{ restaurant.category }}</small>
      <small>{{ restaurant.address }}</small>
      <div class="comment"><i class="bi bi-chat-dots"></i> 99</div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px 10px;
  width: 100%;
  box-sizing: border-box;
}
.search {
  width: 100%;
  input[type='text'] {
    background: #ffffff;
    border: 0.4px solid #bdbdbd;
    width: 100%;
    height: 44px;
    border-radius: 12px;
  }
}
.filter {
  display: flex;
  gap: 8px;
  .btn_sel_category {
    position: relative;
    label {
      display: block;
      padding: 0 10px;
      height: 32px;
      background: #ffffff;
      border: 0.4px solid #bdbdbd;
      box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      line-height: 32px;
      font-size: 12px;
    }
    select {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  button {
    padding: 0 10px;
    height: 32px;
    background: #ffffff;
    border: 0.4px solid #bdbdbd;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    line-height: 32px;
    font-size: 12px;
  }
}
.list {
  margin-top: 60px;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  li {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 12px;
    border-bottom: 0.4px solid #e0e0e0;
    strong {
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
    }
    small {
      font-size: 12px;
    }
    .category {
      color: #fd8c3c;
    }
    .comment {
      font-size: 12px;
    }
    .loading {
      text-align: center;
      font-size: 2em;
      animation: loadingAnimation 1s linear infinite;
      @keyframes loadingAnimation {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
