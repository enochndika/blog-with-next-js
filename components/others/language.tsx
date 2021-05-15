import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import Dropdown from '../ui/dropdown';
import { LanguageIcon } from '../ui/icons';
import { FranceFlag, UsaFlag } from '../ui/flag';

export default function Language() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  return (
    <Dropdown>
      <Dropdown.Toggle className="flex">
        <LanguageIcon size={22} className="mr-1" space={2} />
        <span>{t('Layout.header.item.language.index')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href={router.asPath} locale="fr">
          <span
            className={
              locale === 'fr'
                ? 'text-blue-700 font-bold block'
                : 'block text-black dark:text-white'
            }
          >
            <FranceFlag />
            {t('Layout.header.item.language.french')}
          </span>
        </Dropdown.Item>
        <Dropdown.Item href={router.asPath} locale="en">
          <a
            className={
              locale === 'en'
                ? 'text-blue-700 font-bold block'
                : 'block text-black dark:text-white'
            }
          >
            <UsaFlag />
            {t('Layout.header.item.language.english')}
          </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
