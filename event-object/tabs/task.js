let arrTabs = Array.from(document.querySelectorAll('.tab'));
let arrTabContents = Array.from(document.querySelectorAll('.tab__content'));


for (let i = 0; i < arrTabs.length; i++) {
	const tab = arrTabs[i];
	const TabContent = arrTabContents[i];

	tab.onclick = function () {
		arrTabs.forEach(el => { el.classList.remove('tab_active') });
		tab.classList.add('tab_active');
		arrTabContents.forEach(el => { el.classList.remove('tab__content_active') });
		TabContent.classList.add('tab__content_active');
	}
}