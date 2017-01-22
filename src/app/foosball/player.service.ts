import { IPlayer } from './player.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {

	private players: IPlayer[];

	constructor() {
		this.players = [
			{'name': 'Darcy'},
			{'name': 'Derek'},
			{'name': 'Mastoureh'},
			{'name': 'Mike'},
			{'name': 'Bing'},
			{'name': 'Vikram'},
		];	
	}

	getPlayers(): IPlayer[] {
		return this.players;
	}
}