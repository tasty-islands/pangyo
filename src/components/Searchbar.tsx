import { useRef, useState } from 'react'
import c from '@/utils/c'

// width: 300px;
// height: 44px;

// background: #FFFFFF;
// /* grey400 */

// border: 0.4px solid #BDBDBD;
// /* basic-shadow */

// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
// border-radius: 12px;

// /* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0;

function AdditionalInfo() {
  return <div>정보: </div>
}

export default function Searchbar() {
  const inputRef = useRef<HTMLInputElement>(null)
  // TODO: 상태를 적절한 곳으로 옮기기
  const [value, setValue] = useState('')

  return (
    <div className="relative mx-[10px]">
      <div className="w-[44px] h-[44px] bg-[url(/assets/SearchIcon.svg)] absolute left-0 top-0"></div>
      <input
        ref={inputRef}
        name="query"
        className={c(
          'w-full flex items-center bg-white border border-[0.4px] border-[#BDBDBD] shadow-[0_2px_4px_1px_rgba(0,0,0,0.1)]',
          'rounded-3 placeholder:text-[#9E9E9E] py-[10px] px-[44px] text-[16px]/[23px] text-[#212121]',
        )}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="식당 이름을 입력하세요"
      />
      <button
        className={c(
          'w-[44px] h-[44px] bg-[url(/assets/Delete.svg)] absolute right-0 top-0',
          !value && 'invisible',
        )}
        onClick={() => {
          setValue('')
          inputRef.current.focus()
        }}
      ></button>
      <AdditionalInfo />
    </div>
  )
}
