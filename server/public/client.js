
$(document).ready(onReady);

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

let employeeArray = [];


function onReady() {
    $('#addEmployeeButton').on('click', addEmployee);
    $('#employeeTable').on('click', '#deleteButton', deleteEmployee);
}

let totalExpenses = 0;

// add new employee to table
function addEmployee() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#ID').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    // create new employee with values from inputs
    let employeeStoreToArray = new Employee(
        firstName,
        lastName,
        id,
        title,
        annualSalary
    );
    // push employee to array
    employeeArray.push(employeeStoreToArray);

    // update DOM with employee information
    $('#employeeTable').append(`
        <tr>
            <td>` + firstName + `</td>
            <td>` + lastName + `</td>
            <td>` + id + `</td>
            <td>` + title + `</td>
            <td>` + annualSalary + `</td>
            <td><button id="deleteButton">Delete</button></td>
        </tr>
    `)
    // clear inputs
    $('input').val('');

    totalExpenses += Number(annualSalary);
    // update DOM with total monthly expenses
    $('#totalMonthlyExpenses').empty().append(
        '<h3>Total Monthly: $ ' + totalExpenses.toFixed(2) / 12 + '</h3>');

    if (totalExpenses / 12 > 20000) {
        $('#totalMonthlyExpenses').css('background-color', 'red');
    }

}
// delete employee from table
function deleteEmployee() {
    $(this).closest('tr').remove();
}


