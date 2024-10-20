
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { startTransition } from "react"

function SelectLanguage() {
	const localActive = useLocale()
	const router = useRouter();
	const pathname = usePathname()

  const languages = ['ru', 'ro', 'en', 'uk'];

  const handleSelectionChange = (keys: any) => {
		const nextLocale = keys.currentKey
		const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);
  
		startTransition(() => {
			router.replace(newPathname);
		});
  };

  return (
    <Dropdown>
      <DropdownTrigger>
				<button className='uppercase' type='button'>           {localActive}
				</button>
        {/* <Button 
          variant="bordered" 
          className="uppercase"
        >
          {selectedValue}
        </Button> */}
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={[localActive]} 
        onSelectionChange={handleSelectionChange} 
      >
        {
          languages.map(item => (
            <DropdownItem key={item}>{item.toUpperCase()}</DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>
  );
}

export default SelectLanguage;