import { Editor, MarkdownView, Plugin } from 'obsidian';


function assign_heading (paragraph: string, level: number): string {
    if (level < 1 || level > 6) return "invalid level"   /* invalid heading level? */

    const regex = /^#+ /         /* Any number of hash signs at the begining of a line and followed by a blank space */
    
	const heading = paragraph.match(regex)
    if (heading === null) return "#".repeat(level).concat(" ", paragraph)
    else return paragraph.replace(regex, "#".repeat(level).concat(" "))
}



// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'assign-h1',
			name: 'level 1',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const line_number = editor.getCursor().line;
				const line_content = editor.getLine(line_number);
				editor.setLine(line_number, assign_heading(line_content, 1))
			}
		});

		this.addCommand({
			id: 'assign-h2',
			name: 'Level 2',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const line_number = editor.getCursor().line;
				const line_content = editor.getLine(line_number);
				editor.setLine(line_number, assign_heading(line_content, 2))
			}
		});

		this.addCommand({
			id: 'assign-h3',
			name: 'Level 3',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const line_number = editor.getCursor().line;
				const line_content = editor.getLine(line_number);
				editor.setLine(line_number, assign_heading(line_content, 3))
			}
		});

		this.addCommand({
			id: 'assign-h4',
			name: 'Level 4',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const line_number = editor.getCursor().line;
				const line_content = editor.getLine(line_number);
				editor.setLine(line_number, assign_heading(line_content, 4))
			}
		});

		this.addCommand({
			id: 'assign-h5',
			name: 'Level 5',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const line_number = editor.getCursor().line;
				const line_content = editor.getLine(line_number);
				editor.setLine(line_number, assign_heading(line_content, 5))
			}
		});

		this.addCommand({
			id: 'assign-h6',
			name: 'Level 6',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const line_number = editor.getCursor().line;
				const line_content = editor.getLine(line_number);
				editor.setLine(line_number, assign_heading(line_content, 6))
			}
		})


		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
