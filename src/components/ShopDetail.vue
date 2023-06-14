<script>
const props = defineProps<{
  restaurant: any
}>()
console.log(props.restaurant)
</script>

<template>
  <div class="text-center">
    <div class="text-left">
      <button><i class="arrow left" style="float: left"></i></button>

      <div id="head-menu" style="float: right">
        <ul id="head-menu">
          <li>
            <a href="#" class="important-text-6">⋯</a>
            <ul>
              <li>
                <button class="mt-3 p-3 border-1 shadow-md">
                  오류정보 신고하기
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <hr class="my-3" />
    </div>

    <br />

    <div class="text-left">
      <h3 class="important-text-5 font-bold">순우가</h3>
      <p>
        <small
          class="inline-block vertical-top py-1 color-amber-400 font-bold mr-2"
          >한식</small
        >
        <small
          class="inline-block vertical-top py-1 color-amber-500 font-bold mr-2"
          >페이코 식원 가능</small
        >
      </p>
      <p>
        <small
          class="inline-block vertical-top py-1 font-bold mr-2"
          style="color: #757575"
          >경기 성남시 분당구 대왕판교로 670 1층 119호</small
        >
      </p>
      <p>
        <small
          class="inline-block vertical-top py-1 font-bold mr-2"
          style="color: #757575"
          >031-739-8300</small
        >
      </p>
      <p>
        <small
          class="inline-block vertical-top py-1 font-bold mr-2 p-1"
          style="color: #757575"
          >💬45</small
        >
      </p>
    </div>

    <div class="mt-3 p-3 border-1 shadow-md">
      <h3 class="important-text-3 font-bold">추천 음식</h3>
      <hr class="my-3" />
      <ul>
        <li>맑은 순대국</li>
        <li>맑은 순대국</li>
      </ul>
    </div>
    <div class="mt-3 p-3 border-1 shadow-md">
      <h3 class="important-text-3 font-bold">가격대</h3>
      <hr class="my-3" />
      <ul>
        <li>특황등순대국 9,680</li>
        <li>2인 : 25,520 (+1520원 오버)</li>
        <li>3인 : 37,840 (+1840원 오버)</li>
      </ul>
    </div>
    <div class="mt-3 p-3 border-1 shadow-md">
      <h3 class="important-text-3 font-bold">코멘트</h3>
      <hr class="my-3" />
      <ul class="px-5 text-left list-disc">
        <li>맑은 순대국으로 유명함</li>
        <li>추가금 없이 먹으려면 특황등순대국 + 탄산을 드시면 11,440원</li>
        <li>
          순대국은 기본적으로 선지, 순대, 고기 3종이 섞여서 나오지만 '고기만
          주세요'와 같이 커스텀 주문도 가능함
        </li>
        <li>메뉴가 늦게 나옴</li>
      </ul>
    </div>
    <div class="mt-3 text-8"><a href="#">👍</a> 200</div>
  </div>
</template>

<style scoped>
.arrow {
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

ul li {
  list-style: none;
}

a {
  text-decoration: none;
}

#head-menu {
  margin: 0 auto;
  text-align: center;
}
#head-menu > ul > li {
  float: left;
  position: relative;
}
#head-menu > ul > li > ul {
  display: none;
  width: 180px;
  position: absolute;
  top: 25px;
  right: 5px;
  background: white;
}
#head-menu > ul > li:hover > ul {
  display: block;
}
</style>
