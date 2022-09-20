import { InvoiceInterface } from '../../dataInterface/InvoiceInterface'
import { createInvoiceHandler } from '../../services/invoiceServices/createInvoiceHandler'
import { disableInvoiceHandler } from '../../services/invoiceServices/disableInvoiceHandler'
import { enableInvoiceHandler } from '../../services/invoiceServices/enableInvoiceHandler'
import { getInvoiceHandler } from '../../services/invoiceServices/getInvoiceHandler'
import { updateInvoiceHandler } from '../../services/invoiceServices/updateInvoiceHandler'
import { listInvoiceHandler } from '../../services/invoiceServices/listInvoiceHandler'

export const createInvoice = async (invoice: InvoiceInterface): Promise<InvoiceInterface> => await createInvoiceHandler(invoice)

export const updateInvoice = async (invoice: InvoiceInterface): Promise<InvoiceInterface> => await updateInvoiceHandler(invoice)

export const disableInvoice = async (invoiceNumber: String): Promise<boolean> => await disableInvoiceHandler(invoiceNumber)

export const enableInvoice = async (invoiceNumber: String): Promise<boolean> => await enableInvoiceHandler(invoiceNumber)

export const getInvoice = async (invoiceNumber: String): Promise<InvoiceInterface | null> => await getInvoiceHandler(invoiceNumber)

export const invoiceList = async (): Promise<InvoiceInterface[]> => await listInvoiceHandler()
