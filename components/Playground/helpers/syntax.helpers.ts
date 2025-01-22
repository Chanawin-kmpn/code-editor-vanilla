import { PrismTheme } from 'prism-react-renderer';

export const syntaxTheme: PrismTheme = {
	plain: {
		color: '#e4e4e7', // แทน var(--syntax-txt)
		backgroundColor: 'transparent',
	},
	styles: [
		{
			types: ['prolog', 'comment', 'doctype', 'cdata'],
			style: {
				color: '#6a737d', // แทน var(--syntax-comment)
			},
		},
		{ types: ['tag'], style: { color: '#CD743A' } },
		{
			types: ['property', 'deleted', 'constant', 'symbol'],
			style: { color: '#7CD9FA' }, // แทน var(--syntax-prop)
		},
		{
			types: ['boolean', 'number'],
			style: { color: '#f97316' }, // แทน var(--syntax-bool)
		},
		{
			types: ['attr-name', 'tag'],
			style: { fontWeight: '500' }, // แทน var(--font-weight-medium)
		},
		{
			types: ['string', 'attr-value'],
			style: {
				color: '#0ea5e9', // แทน var(--syntax-val)
			},
		},
		{
			types: [
				'operator',
				'entity',
				'url',
				'string',
				'variable',
				'language-css',
				'keyword',
			],
			style: {
				color: '#d4d4d8', // แทน var(--syntax-str)
			},
		},
		{
			types: ['unit'],
			style: {
				color: '#ef4444',
			},
		},
		{
			types: [
				'selector',
				'attr-name',
				'char',
				'builtin',
				'insert',
				'script-punctuation',
			],
			style: {
				color: '#84cc16', // แทน var(--syntax-name)
			},
		},
		{
			types: ['deleted'],
			style: {
				color: '#b31d28', // แทน var(--syntax-del)
			},
		},
		{
			types: ['italic'],
			style: {
				fontStyle: 'italic',
			},
		},
		{
			types: ['important', 'bold'],
			style: {
				fontWeight: '700', // แทน var(--font-weight-bold)
			},
		},
		{
			types: ['regex', 'important'],
			style: {
				color: '#e36209', // แทน var(--syntax-regex)
			},
		},
		{
			types: ['atrule', 'function'],
			style: {
				color: '#6f42c1', // แทน var(--syntax-fn)
			},
		},

		{
			types: ['string'],
			style: {
				fontWeight: '500', // แทน var(--font-weight-medium)
			},
		},
	],
} as const;
