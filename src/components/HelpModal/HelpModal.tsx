import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import Link from 'next/link'
import DogSymbolIcon from '../icons/DogSymbolIcon'

import styles from '@/styles/components/help-modal.module.scss'
import { useLocale, useTranslations } from 'next-intl'
import FaqIcon from '../icons/FaqIcon'


type Props = {
	children: React.ReactNode,
	handle: () => void,
	isOpen: boolean
}

function HelpModal({children, handle, isOpen}: Props) {

	const localActive = useLocale()

	const t = useTranslations('HelpModal');

	const handleFaq = () => {
		handle()
	}

	return (
		<Modal 
		size='2xl' 
		placement='center'
		isOpen={isOpen} 
		onClose={handle} 
	>
		<ModalContent className={styles.modal_content}>
			
				<>
					<ModalHeader className={styles.header}>
						{t('name_title')} ?
						<p>{t('name_subtitle')}</p>
					</ModalHeader>
					<ModalBody className={styles.body}>
						<Link
						className={styles.body_link} 
						href='mailto:djunpy@gmail.com'>
							<DogSymbolIcon classes={styles.body_icon}/>
							<span>{t('name_mail_btn')}</span>
						</Link>
						<Link
						onClick={handleFaq}
						className={styles.body_link}  href={`/${localActive}/faq`}>
							<FaqIcon classes={styles.body_icon}/>
							<span>{t('name_faq_btn')}</span>
						</Link>
					</ModalBody>
					<ModalFooter>
					</ModalFooter>
				</>
		
		</ModalContent>
	</Modal>
	)
}

export default HelpModal