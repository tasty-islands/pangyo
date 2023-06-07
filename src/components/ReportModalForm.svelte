<script>
  import { INSERT_REPORT } from '../graphql/mutation'
  import { GET_REPORT } from '../graphql/queries'
  import { mutation, getClient } from 'svelte-apollo'

  let reportInput = ''
  const addReportMutation = mutation(INSERT_REPORT)
  const updateCache = (cache, { data }) => {
    const existingTodos = cache.readQuery({
      query: GET_REPORT,
      variables: {
        id: 1,
      },
    })
    const newReport = data.insert_report.returning[0]
    cache.writeQuery({
      query: GET_REPORT,
      data: { report: [newReport, ...existingTodos.report] },
    })
  }
  async function addReport() {
    //TODO: variables restaurant_id에 따라 값 변경되게 로직 수정 필요
    try {
      const testData = {
        restaurant_id: 1,
        comment: reportInput,
        type: '테스트 타입',
        user: 'soyoung',
      }
      await addReportMutation({
        variables: testData,
        update: updateCache,
      })
      reportInput = ''
    } catch (error) {
      console.log(error)
    }
  }
</script>

<div
  class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
>
  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
    오류정보 신고하기
  </h3>
  <button
    type="button"
    on:click
    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    data-modal-hide="defaultModal"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
    <span class="sr-only">Close modal</span>
  </button>
</div>
<!-- Modal body -->
<form class="flex flex-col" on:submit|preventDefault={addReport}>
  <textarea
    bind:value={reportInput}
    placeholder="내용을 입력해주세요. (ex.메뉴정보가 틀립니다.)"
    rows="4"
    class="m-4 p-3 border-1"
  />
  <!-- Modal footer -->
  <div
    class="flex items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
  >
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >신고하기</button
    >
    <button
      type="button"
      on:click
      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      >Cancel</button
    >
  </div>
</form>
