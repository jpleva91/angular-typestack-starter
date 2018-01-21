import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

// Using active record pattern
@Entity('User')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    UserId: number;

    @Column()
    BaseEntityID: number;

    @Column()
    EmployeeID: number;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    MiddleInitial: string;

    // Add any additional queries below by creating a static method using query builder
}
