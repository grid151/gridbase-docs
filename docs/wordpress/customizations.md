---
title: Custom CSS
---
# How to Apply Custom CSS to Your WordPress Theme

If you want to customize the look and feel of the seller net sheet plugin on your WordPress site, follow these steps to apply custom CSS:

## Step 1: Access the WordPress Admin Dashboard
1. **Log in** to your WordPress site.
2. Navigate to the **Admin Dashboard**.

## Step 2: Open the Customizer
1. In the dashboard menu, go to **Appearance**.
2. Click on **Customize**. This will open the WordPress Customizer, where you can preview changes in real-time.

## Step 3: Add Custom CSS
1. In the Customizer, find and click on the **Additional CSS** option. This option might be under **Appearance** or **Customize** depending on your theme.
2. In the Additional CSS section, you can add your custom CSS code.

## Step 4: Copy and Paste the Custom CSS Code
1. Copy the following CSS code:

```css
#seller_netsheet.seller-net-sheet.container {
    padding: 20px;
    background-color: #f8f9fa; /* Light background for container */
    border: 1px solid #dee2e6; /* Border around the container */
    border-radius: 8px; /* Rounded corners */
}

#seller_netsheet .mt-3 {
    margin-top: 1rem !important;
}

#seller_netsheet .mt-4 {
    margin-top: 1.5rem !important;
}

#seller_netsheet .mb-3 {
    margin-bottom: 1rem !important;
}

#seller_netsheet .mb-4 {
    margin-bottom: 1.5rem !important;
}

#seller_netsheet .mb-5 {
    margin-bottom: 2rem !important;
}

/* Typography */
#seller_netsheet h4 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #343a40; /* Darker text color */
}

#seller_netsheet .text-sm {
    font-size: 0.875rem;
}

#seller_netsheet .fw-bold {
    font-weight: 700 !important;
}

#seller_netsheet .text-center {
    text-align: center;
}

#seller_netsheet .text-md-start {
    text-align: left;
}

#seller_netsheet .text-md-end {
    text-align: right;
}

/* Card */
#seller_netsheet .card {
    border: 1px solid #dee2e6;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

#seller_netsheet .card-header {
    background-color: #f8f9fa;
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
}

#seller_netsheet .card-body {
    padding: 1rem;
}

/* Table */
#seller_netsheet .table-responsive {
    overflow-x: auto;
}

#seller_netsheet table {
    width: 100%;
    margin-bottom: 1rem;
    border-collapse: collapse;
}

#seller_netsheet th,
#seller_netsheet td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

#seller_netsheet th {
    font-weight: 700;
    text-align: left;
}

/* Buttons */
#seller_netsheet .btn {
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
}

#seller_netsheet .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
}

#seller_netsheet .btn-primary:hover {
    background-color: #0056b3;
    border-color: #004085;
}

#seller_netsheet .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
}

#seller_netsheet .btn-secondary:hover {
    background-color: #5a6268;
    border-color: #545b62;
}

/* Grid and layout */
#seller_netsheet .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

#seller_netsheet .col-12,
#seller_netsheet .col-md-4,
#seller_netsheet .col-md-8,
#seller_netsheet .col-lg-3,
#seller_netsheet .col-lg-6 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
}

#seller_netsheet .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}

#seller_netsheet .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
}

#seller_netsheet .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
}

#seller_netsheet .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
}

#seller_netsheet .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
}

#seller_netsheet .d-grid {
    display: grid;
}

#seller_netsheet .gap-2 {
    grid-gap: 0.5rem;
}

#seller_netsheet .d-md-flex {
    display: flex;
}

#seller_netsheet .justify-content-md-end {
    justify-content: flex-end;
}

/* Misc */
#seller_netsheet .img-fluid {
    max-width: 100%;
    height: auto;
}

#seller_netsheet .text-muted {
    color: #6c757d !important;
}
```

2. Paste the copied CSS code into the **Additional CSS** section in the Customizer.

## Step 5: Save and Publish
1. After pasting the custom CSS code, you will see a live preview of the changes on your site.
2. If everything looks good, click the **Publish** button to apply the changes.

## Step 6: Verify the Changes
1. Visit the page where the seller net sheet plugin is used.
2. Ensure that the custom styles are applied correctly.

## Additional Tips
- **Backup Your CSS:** Before making significant changes, consider backing up your existing CSS in case you need to revert back.
- **Use Developer Tools:** Use browser developer tools (F12 in most browsers) to inspect elements and make real-time changes before finalizing them in the customizer.
- **Keep It Clean:** Organize and comment your CSS for better readability and maintenance.

By following these steps, you can easily apply custom CSS to your WordPress theme and enhance the look and feel of the seller net sheet plugin without affecting other parts of your site.
```
