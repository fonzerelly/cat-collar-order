import {findByLabelText, queryByPlaceholderText, render, screen} from '@testing-library/react'

import {OrderForm} from './OrderForm'
describe('OrderForm', () => {
  describe('material', () => {

    it('should provide selection for leather or fabric', () => {
      render(<OrderForm/>)
      screen.getByLabelText('Leder')
      screen.getByLabelText('Stoff')
    })
    it('should preselect leather', () => {
      render(<OrderForm/>)
      expect(screen.getByLabelText('Leder').checked).toBe(true)
    }) 
  })
  describe('pearls', () => {
    describe('when leather is selected', () => {
      it('should be visible', () => {
        render(<OrderForm/>)
        screen.getByLabelText('Muster')
      })
      it('should preselect diamonds', () => {
        render(<OrderForm/>)
        const dropdown = screen.getByLabelText('Muster')
        expect(dropdown.value).toEqual('dots')
      })
    })
    describe('when fabric is selected', () => {
      let dropdown
      beforeEach(() => {
        const {rerender} = render(<OrderForm></OrderForm>)
        screen.getByLabelText('Stoff').click()
        rerender(<OrderForm/>)
        dropdown = screen.queryByLabelText('Muster')
      })
      it('should be hidden', ()=> {
        expect(dropdown).toBeNull()
      })
    })
  })
  describe('color', () => {
    describe('when leather is selected', () => {
      it('should not be visible', () => {
        render(<OrderForm/>)
        const dropdown = screen.queryByLabelText('Farbe')
        expect(dropdown).toBeNull()
      })
    })
    describe('when fabric is selected', () => {
      let dropdown
      beforeEach(() => {
        const {rerender} = render(<OrderForm/>)
        screen.getByLabelText('Stoff').click()
        rerender(<OrderForm/>)
        dropdown = screen.queryByLabelText('Farbe')
      })
      it('should be visible', () => {
        expect(dropdown).not.toBeNull()
      })
      it('should preselect red', () => {
        expect(dropdown).toHaveValue('#ff0000')
      })
    })
    describe('label', () => {
      describe('when leather is selected', () => {
        it('should be invisible', () => {
          render(<OrderForm/>)
          const checkbox = screen.queryByLabelText('Möchten Sie einen Namensanhänger für das Halsband?')
          expect(checkbox).toBeNull()
        })
      })
      describe('when fabric is selected', () => {
        let checkbox, labelText
        beforeEach(() => {
          const {rerender} = render(<OrderForm/>)
          screen.getByLabelText('Stoff').click()
          rerender(<OrderForm/>)
          checkbox = screen.queryByLabelText('Möchten Sie einen Namensanhänger für das Halsband?')
          labelText = screen.queryByPlaceholderText('Geben Sie hier den Namen ihres Lieblings ein')
        })
        it('should be visible', () => {
          expect(checkbox).not.toBeNull()
        })
        it('should be checked', () => {
          expect(checkbox).toBeChecked()
        })
        it('should show input field for name', () => {
          expect(labelText).not.toBeNull()
        })
        describe('when label is unselected', () => {
          beforeEach(() => {
            const {rerender,} = render(<OrderForm/>)
            screen.getByLabelText('Stoff').click()
            rerender(<OrderForm/>)
            screen.queryByLabelText('Möchten Sie einen Namensanhänger für das Halsband?').click()
            labelText = screen.queryByPlaceholderText('Geben Sie hier den Namen ihres Lieblings ein')
            rerender(<OrderForm/>)
          })
          it('should hide input field for name', () => {
            expect(labelText).toBeNull()
          })

          // ToDo füge noch einen Context ein und
          // einen Button, der die Daten aus dem Form
          // zieht und im Context speichert
        })
      })
    })
  })
})