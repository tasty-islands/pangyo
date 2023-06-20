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
  // TODO: url query 기반 상태 렌더링
  const [kind, setKind] = useState<'없음' | '한식' | '중식' | '양식'>('없음')
  const [filter, setFilter] = useState<'없음' | '거리' | '리뷰'>('없음')

  return (
    <div className="flex space-x-2">
      <div className="flex items-center relative group">
        <select
          className={c(
            'appearance-none',
            'text-[#616161] pl-9px pr-32px py-[7px]',
            'border border-[0.4px] border-[#BDBDBD] shadow-[0_2px_4px_1px_rgba(0,0,0,0.1)] rounded-3',
            'hover:border-[#FB5B00] hover:text-[#FB5B00]',
            'cursor-pointer',
          )}
        >
          <option>종류</option>
          <option>한식</option>
          <option>중식</option>
          <option>양식</option>
        </select>
        <div className="bg-[url(/assets/Dropdown.svg)] w-12px h-12px bg-contain bg-center bg-no-repeat absolute right-12px" />
      </div>
      <button
        className={c(
          'text-[#616161] px-9px py-[7px]',
          'border border-[0.4px] border-[#BDBDBD] shadow-[0_2px_4px_1px_rgba(0,0,0,0.1)] rounded-3',
          'hover:border-[#FB5B00] hover:text-[#FB5B00]',
        )}
      >
        가까운 순
      </button>
      <button
        className={c(
          'text-[#616161] px-9px py-[7px]',
          'border border-[0.4px] border-[#BDBDBD] shadow-[0_2px_4px_1px_rgba(0,0,0,0.1)] rounded-3',
          'hover:border-[#FB5B00] hover:text-[#FB5B00]',
        )}
      >
        리뷰많은 순
      </button>
    </div>
  )
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
      <div className="mt-2">
        <AdditionalInfo />
      </div>
    </div>
  )
}
