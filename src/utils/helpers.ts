import { IPageContent } from '@/pages';
import { useTranslation } from 'react-i18next'

export const getContent = () => {
    const { t } = useTranslation('common');

    return {
        header: t("header", { returnObjects: true }),
    } as IPageContent
}