import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(potentialStudents, value) {
        return potentialStudents.filter(user => {
            return user.name.toLowerCase().includes(value.toLowerCase())
        })
    }
}
