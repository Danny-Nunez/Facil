import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationProvider from '@/app/[locale]/TranslationsProvider';


const i18nNamespaces = [
  'common', 'home',
  'services', 'about'
];

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      {children}
    </TranslationProvider>
  );
}