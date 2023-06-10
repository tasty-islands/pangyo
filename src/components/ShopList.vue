<script></script>

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
        <label for="selCategory">종류</label>
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
    <li>
      <strong>서브웨이 판교테크노밸리점</strong>
      <small class="category">패스트푸드</small>
      <small>경기 성남시 분당구 대왕판교로 670 1층 119호</small>
      <div class="comment">99</div>
    </li>
    <li>
      <strong>서브웨이 판교테크노밸리점</strong>
      <small class="category">패스트푸드</small>
      <small>경기 성남시 분당구 대왕판교로 670 1층 119호</small>
      <div class="comment">99</div>
    </li>
    <li>
      <strong>서브웨이 판교테크노밸리점</strong>
      <small class="category">패스트푸드</small>
      <small>경기 성남시 분당구 대왕판교로 670 1층 119호</small>
      <div class="comment">99</div>
    </li>
    <li>
      <strong>서브웨이 판교테크노밸리점</strong>
      <small class="category">패스트푸드</small>
      <small>경기 성남시 분당구 대왕판교로 670 1층 119호</small>
      <div class="comment">99</div>
    </li>
    <li>
      <strong>서브웨이 판교테크노밸리점</strong>
      <small class="category">패스트푸드</small>
      <small>경기 성남시 분당구 대왕판교로 670 1층 119호</small>
      <div class="comment">99</div>
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
    .comment {
      font-size: 12px;
    }
  }
}
</style>
