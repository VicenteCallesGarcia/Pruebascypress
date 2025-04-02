describe('Agregar tareas',() => {

    it('Agregar una tarea a la lista',() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')
    })

    

    it('Marcar tarea como completada',() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.todo-list').contains('Tarea 1')
        cy.get('[data-testid="todo-item-toggle"]').click()
    })

    it('Desmarcar tarea completada',() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1{enter}')
        cy.get('.new-todo').type('Tarea 2{enter}')
        cy.get('.todo-list').contains('Tarea 1')
        cy.get('.todo-list').contains('Tarea 2')
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
        })

   it('Editar tarea',() => {
            cy.visit('https://todomvc.com/examples/react/dist/')
            cy.get('.new-todo').type('Tarea 1{enter}')
            cy.get('.new-todo').type('Tarea 2{enter}')
            cy.get('.todo-list').contains('Tarea 1')
            cy.get('.todo-list').contains('Tarea 2')
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get('.new-todo').type('Tarea 3{enter}')
            cy.get('.todo-list').contains('Tarea 3')
            cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').dblclick()
            cy.get('.view > .input-container > [data-testid="text-input"]').clear().type('Si te caes te levantas{enter}')
            

        })
    it('Borrar tarea',() => {
            cy.visit('https://todomvc.com/examples/react/dist/')
            cy.get('.new-todo').type('Tarea 1{enter}')
            cy.get('.new-todo').type('Tarea 2{enter}')
            cy.get('.todo-list').contains('Tarea 1')
            cy.get('.todo-list').contains('Tarea 2')
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get('.new-todo').type('Tarea 3{enter}')
            cy.get('.todo-list').contains('Tarea 3')
            cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').dblclick()
            cy.get('.view > .input-container > [data-testid="text-input"]').clear().type('Si te caes te levantas{enter}')
            cy.get('[data-testid="text-input"]').type('Hacer la cena{enter}')
            
            
            })
    })
