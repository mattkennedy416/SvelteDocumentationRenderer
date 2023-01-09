import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

const data = [
	{
		section: 'Menu 1',
		icon: DocumentsIcon,
		content: [

		]
	},
	{
		section: 'Menu 2',
		icon: MessagesIcon,
		content: [

		]
	},
	{
		section: 'Menu 3',
		icon: PicturesIcon,
		content: [

		]
	},
	{
		section: 'Menu 4',
		icon: StatisticsIcon,
		content: [

		]
	},
	{
		section: 'Menu 5',
		icon: EventsIcon,
		content: [
			{
				title: 'Weddings',
				link: '/events/weddings'
			},
			{
				title: 'Networking',
				link: '/events/networking'
			}
		]
	}
];

export default data;
