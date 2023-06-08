<script>
  import ReportModalList from './ReportModalList.svelte'
  import ReportModalForm from './ReportModalForm.svelte'
  import Modal from './Modal.svelte'
  import { setClient } from 'svelte-apollo'
  import { createApolloClient } from '../graphql/apollo'

  //Apollo
  const { PUBLIC_TOKEN } = import.meta.env

  export let authToken = PUBLIC_TOKEN
  const client = createApolloClient(authToken)
  setClient(client)

  //Modal
  let showModal = false
  let modalContent

  function toggleModal(component) {
    modalContent = component
    showModal = !showModal
  }
</script>

<div>
  <!-- TODO: 스타일코드 혜원님 디자인에 맞춰 수정 필요 -->
  <button
    on:click={() => toggleModal(ReportModalForm)}
    class="mt-3 inline-block vertical-top px-2 py-1 bg-sky-500 border-rounded"
    >오류정보 신고하기</button
  >
  <button
    on:click={() => toggleModal(ReportModalList)}
    class="mt-3 inline-block vertical-top px-2 py-1 bg-sky-500 border-rounded"
    >오류정보 리스트</button
  >
</div>
{#if showModal}
  <Modal on:click={toggleModal} {modalContent} />
{/if}
