import { Column, Entity, ManyToMany } from 'typeorm';
import { Games } from './Games';

@Entity('parent_platforms', { schema: 'rawgDatabase' })
export class ParentPlatforms {
  @Column('int', { primary: true, name: 'id' })
  id!: number;

  @ManyToMany(() => Games, games => games.parentPlatforms)
  games!: Games[];
}
