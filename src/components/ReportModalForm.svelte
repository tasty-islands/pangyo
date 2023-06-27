<script>
  import { INSERT_REPORT } from '../graphql/mutation'
  import { GET_REPORT } from '../graphql/queries'
  import { mutation, getClient } from 'svelte-apollo'

  let reportInput = ''
  let reporter = ''
  export let restaurantId
  let questions = [
    { id: 1, text: `임시휴업` },
    { id: 2, text: `폐업` },
    { id: 3, text: `여기에 없는 장소임` },
    { id: 4, text: `다른 장소와 중복됨` },
    { id: 5, text: `불쾌감을 주거나 유해하거나 오해의 소지가 있음` },
    { id: 6, text: `비공개 장소임` },
    { id: 7, text: `다른 곳으로 이사` },
    { id: 8, text: `기타` },
  ]

  let selected

  const addReportMutation = mutation(INSERT_REPORT)
  const updateCache = (cache, { data }) => {
    const existingReport = cache.readQuery({
      query: GET_REPORT,
      variables: {
        id: restaurantId,
      },
    })

    const newReport = data.insert_report.returning[0]

    cache.writeQuery({
      query: GET_REPORT,
      variables: {
        id: restaurantId,
      },
      data: { report: [newReport, ...existingReport.report] },
    })
  }
  async function addReport() {
    try {
      const sendData = {
        restaurant_id: restaurantId,
        comment: reportInput,
        type: selected.text,
        user: reporter,
      }
      await addReportMutation({
        variables: sendData,
        update: updateCache,
      })
      reportInput = ''
      reporter = ''
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
  <input
    type="text"
    bind:value={reporter}
    placeholder="연락받으실 이메일을 입력해주세요."
    class="m-4 p-3 mb-0 border-1"
  />

  <select bind:value={selected} class="m-4 p-3 mb-0 border-1">
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <textarea
    bind:value={reportInput}
    placeholder="상세한 신고내용을 작성해주세요."
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
