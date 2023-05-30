<script>
import Modal from './Modal.svelte';
 let showModal = false;
  
  const toggleModal = () => {
    showModal = !showModal;
  };

  function handleWindowKeyDown(event) {
		if (event.key === 'Escape' && showModal) {
      console.log(event)
			showModal = false
		}
	}
</script>

<p>
  <Modal {showModal} on:click={toggleModal}>
    <h3>오류정보 신고하기</h3>
    <form class="flex flex-col">
      <textarea placeholder="내용을 입력해주세요. (ex.메뉴정보가 틀립니다.)" rows="4" class="mt-3 p-3 border-1 shadow-md" />
      
      <button class="mt-3 inline-block vertical-top px-2 py-1 bg-sky-500 border-rounded">신고하기</button>
    </form>
  </Modal>
  <button on:click={toggleModal}>오류정보 신고하기</button>
  
</p>
<svelte:window on:keydown={handleWindowKeyDown}/>